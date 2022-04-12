import { useState } from "react";


const toggle = () => {
    const [visibilty, setVisibilty] = useState(0);
    return [visibilty, setVisibilty];
}
export default toggle;