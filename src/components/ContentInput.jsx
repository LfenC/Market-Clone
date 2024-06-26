import GenericInput from "@/components/GenericInput";

export default function ContentInput() {
  return (
    <div className="flex flex-col lg:justify-start sm:justify-center lg:items-start sm:items-center sm:mt-3 lg:mt-6">
      <GenericInput
        label="Title"
        placeholder="Enter the title of your product"
        id="title"
        name="title"
      />
      <GenericInput
        label="Price"
        placeholder="Enter the price"
        id="price"
        name="price"
      />
      <div>
        <label className="">Category</label>
        <select name="category" id="category">
          <option value="0">Ingresa una opcion</option>
          <option id="cars">Cars</option>
          <option id="electronics">Electronics</option>
          <option id="properties">Properties</option>
        </select>
      </div>
      <GenericInput
        label="Descritpion"
        placeholder="Enter the description"
        id="description"
        name="description"
      />
      <GenericInput
        label="Phone Number"
        placeholder="mobile: +"
        id="phoneNumber"
        name="phoneNumber"
      />
      <GenericInput
        label="Location"
        placeholder="Enter your location"
        id="location"
        name="location"
      />
      <button className="py-2 mt-2 mb-4 lg:ml-0 sm:mx-auto px-2 md:w-48 sm:w-60 bg-blue-700 rounded-md text-white hover:scale-95 font-medium text-lg text-center hover:bg-blue-200 hover:text-black hover:transition-all">
        Publish
      </button>
    </div>
  );
}
