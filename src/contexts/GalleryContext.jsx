import { Children, createContext } from "react"

const galleryContext = createContext()

function GalleryContext({Children}) {
    const [selectedId, setselectedId] = useState(null);

	function handleSelect(id) {
		setselectedId((selectedId) => (selectedId === id ? null : id));
	}
	function handleUnselect() {
		setselectedId(null);
	}
    return (
       <galleryContext.Provider value={{ selectedId, handleSelect, handleUnselect }}>
         {Children}
       </galleryContext.Provider>
    )
}

export default GalleryContext
