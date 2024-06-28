import { FormContentCreateProductProps } from '@/types/formContentCreateProductProps';
import GenericInput from '../GenericInput';

export default function FormContentCreateProduct({isLoadignResponse} : FormContentCreateProductProps) {
    return (
        <div className="container-inputs">
        <GenericInput label="Title" placeholder="Enter the title of your product" id="title" name="title" />
        <GenericInput label="Price" placeholder="Enter the price" id="price" name="price" />
        <label>Category</label>
        <select name="category" id="category">
            <option value="0">Ingresa una opcion</option>
            <option id="cars">Cars</option>
            <option id="electronics">Electronics</option>
            <option id="properties">Properties</option>
        </select>
        <GenericInput label="Descritpion"  placeholder="Enter the description" id="description" name="description" />
        <GenericInput label="Phone Number" placeholder="mobile: +" id="phoneNumber" name="phoneNumber" />
        <GenericInput label="Location"  placeholder="Enter your location" id="location" name="location" />
        <button disabled={isLoadignResponse} className={`button-publish`}>
            {isLoadignResponse ? "Loading" : "Publish"}
        </button>
    </div>
    )
}