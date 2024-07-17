import axios from "axios"
import { Appbar } from "../ components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar/>
         <div className="pt-8 flex justify-center">
            <div className="max-w-screen-lg w-full">
                <TitleArea onChange={(e) => {
                    setTitle(e.target.value);
                }}/>
                <TextArea onChange={(e) => {
                    setDescription(e.target.value);
                }}/>
                <button onClick={ async() => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description
                    },{
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="button" className=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-6 py-3 text-center me-2 mb-2">Publish post
                </button>
            </div>
        </div>       
    </div>
}

const TitleArea = ({ onChange } : {onChange : (e : ChangeEvent<HTMLInputElement> ) => void}) => {
    return <div>
        <input onChange={onChange} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title"/>
    </div>
}


const TextArea = ({ onChange } : {onChange : (e : ChangeEvent<HTMLTextAreaElement> ) => void}) => {
    return <div className="pt-2">
        <textarea onChange={onChange} rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
    </div>
}