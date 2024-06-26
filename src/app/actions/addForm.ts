"use server"

export async function addForm(formData: FormData) {
    const {files, ...data} = Object.fromEntries(formData)

    console.log({files, data})

    return true

}