import { useState } from "react"

const useUploadImage = () => {
    const [postImage, setPostImage] = useState('')
    // console.log('Image 2: ', postImage)

    const handle_Upload_Image = (e) => {
        const reader = new FileReader()

        setPostImage('')

        reader.onload = () => {
            if(reader.readyState === 2) {
                setPostImage(reader.result)
            }
        }
        
        reader.readAsDataURL(e.target.files[0])
    }


    const handle_Remove_Image = () => {
        setPostImage('')
    }

    return { postImage, handle_Upload_Image, handle_Remove_Image };
}



export default useUploadImage