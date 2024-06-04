
import dynamic from "next/dynamic";


const DynamicMap = dynamic(()=> import('../components/Map'),{
    ssr: false
})

export default DynamicMap