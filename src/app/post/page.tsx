"use client";
import { useState } from "react";
import dynamic from "next/dynamic"; // For lazy loading react-dropzone

const Dropzone = dynamic(() => import("react-dropzone"), { ssr: false });

// Expanded list of categories
const categories = [
  {
    id: 1,
    name: "Electronics",
    extraFields: ["Warranty", "Condition"],
  },
  {
    id: 2,
    name: "Clothing",
    extraFields: ["Size", "Color"],
  },
  {
    id: 3,
    name: "Home & Garden",
    extraFields: ["Material", "Dimensions"],
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    extraFields: ["Brand", "Type"],
  },
  {
    id: 5,
    name: "Books & Magazines",
    extraFields: ["Author", "Genre"],
  },
  {
    id: 6,
    name: "Beauty & Personal Care",
    extraFields: ["Product Type", "Usage"],
  },
  {
    id: 7,
    name: "Automotive",
    extraFields: ["Make", "Model", "Year"],
  },
  {
    id: 8,
    name: "Health & Wellness",
    extraFields: ["Purpose", "Ingredients"],
  },
];

// List of Ghanaian cities for the location dropdown
const ghanaianCities = [
  "Accra",
  "Kumasi",
  "Tamale",
  "Cape Coast",
  "Takoradi",
  "Sunyani",
  "Ho",
  "Koforidua",
  "Wa",
  "Bolgatanga",
  "Sekondi-Takoradi",
  "Tema",
  "Obuasi",
  "Mampong",
  "Adenta",
  "Madina",
  "Ashaiman",
  "Swedru",
  "Effiduase",
  "Nkawkaw",
  "Winneba",
];

export default function Post() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState("");
  const [location, setLocation] = useState("");
  const [exchangePossible, setExchangePossible] = useState(false);
  const [price, setPrice] = useState("");
  const [negotiation, setNegotiation] = useState("No");
  const [delivery, setDelivery] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    itemToDeliver: "",
    deliveryLocation: "",
    deliveryTime: "",
    deliveryCharge: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [extraFields, setExtraFields] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !title ||
      !category ||
      images.length < 2 ||
      !location ||
      !brand ||
      !description ||
      !price
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("New post:", {
      title,
      description,
      category,
      location,
      brand,
      exchangePossible,
      price,
      negotiation,
      deliveryDetails,
      extraFields,
      images: images.map((image) => URL.createObjectURL(image)), // Convert images to URLs for logging
    });
  };

  const handleImageDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length + images.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }
    setImages([...images, ...acceptedFiles]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = categories.find(
      (cat) => cat.id === parseInt(e.target.value)
    );
    setCategory(selectedCategory?.id);
    setExtraFields(
      selectedCategory?.extraFields.reduce(
        (acc, field) => ({ ...acc, [field]: "" }),
        {}
      )
    );
  };

  const handleDeliveryToggle = () => {
    setDelivery(!delivery);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary text-glow">
        Create a Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="glassmorphism p-8 rounded-lg space-y-6"
      >
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            value={category || ""}
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Images <span className="text-red-500">*</span> (Minimum 2 Required)
          </label>
          <Dropzone
            onDropAccepted={handleImageDrop}
            multiple
            accept={{ "image/*": [] }}
            maxFiles={5}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition duration-300"
              >
                <input {...getInputProps()} />
                <p className="text-sm text-gray-600">
                  Drag and drop images here, or click to select.
                </p>
                <p className="text-sm text-gray-500">(Maximum 5 images)</p>
              </div>
            )}
          </Dropzone>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-md overflow-hidden border border-gray-300"
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className="w-full h-20 object-cover"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          {images.length < 2 && (
            <p className="text-sm text-red-500">
              At least 2 images are required.
            </p>
          )}
        </div>

        {/* Location Dropdown */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Location <span className="text-red-500">*</span>
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="" disabled>
              Select a location
            </option>
            {ghanaianCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Brand */}
        <div>
          <label htmlFor="brand" className="block text-sm font-medium mb-2">
            Brand <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Exchange Possible */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Exchange Possible?
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="exchange"
                checked={!exchangePossible}
                onChange={() => setExchangePossible(false)}
                className="cursor-pointer"
              />
              <span>No</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="exchange"
                checked={exchangePossible}
                onChange={() => setExchangePossible(true)}
                className="cursor-pointer"
              />
              <span>Yes</span>
            </label>
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium mb-2">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Negotiation Options */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Are you open for negotiations?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="negotiation"
                value="Yes"
                checked={negotiation === "Yes"}
                onChange={() => setNegotiation("Yes")}
                className="cursor-pointer"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="negotiation"
                value="No"
                checked={negotiation === "No"}
                onChange={() => setNegotiation("No")}
                className="cursor-pointer"
              />
              <span>No</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="negotiation"
                value="Not Sure"
                checked={negotiation === "Not Sure"}
                onChange={() => setNegotiation("Not Sure")}
                className="cursor-pointer"
              />
              <span>Not Sure</span>
            </label>
          </div>
        </div>

        {/* Dynamic Extra Fields Based on Category */}
        {category && (
          <div>
            <h3 className="text-xl font-bold mb-4">Additional Details</h3>
            {categories
              .find((cat) => cat.id === category)
              ?.extraFields.map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium mb-2"
                  >
                    {field} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={field}
                    value={extraFields[field] || ""}
                    onChange={(e) =>
                      setExtraFields({
                        ...extraFields,
                        [field]: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              ))}
          </div>
        )}

        {/* Delivery Toggle */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Include Delivery Details? <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={delivery}
                onChange={handleDeliveryToggle}
                className="cursor-pointer"
              />
              <span>Yes</span>
            </label>
          </div>
          {delivery && (
            <div className="space-y-4 mt-4 border-t pt-4">
              <div>
                <label
                  htmlFor="itemToDeliver"
                  className="block text-sm font-medium mb-2"
                >
                  Item to Deliver <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="itemToDeliver"
                  value={deliveryDetails.itemToDeliver}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      itemToDeliver: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="deliveryLocation"
                  className="block text-sm font-medium mb-2"
                >
                  Delivery Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="deliveryLocation"
                  value={deliveryDetails.deliveryLocation}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      deliveryLocation: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="deliveryTime"
                  className="block text-sm font-medium mb-2"
                >
                  Estimated Delivery Time{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="deliveryTime"
                  value={deliveryDetails.deliveryTime}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      deliveryTime: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="deliveryCharge"
                  className="block text-sm font-medium mb-2"
                >
                  Delivery Charge <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="deliveryCharge"
                  value={deliveryDetails.deliveryCharge}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      deliveryCharge: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
          )}
        </div>

        {/* Publish Ad Button */}
        <button
          type="submit"
          className="w-full bg-primary text-background font-bold py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300"
        >
          Post Ad
        </button>
      </form>
    </div>
  );
}
