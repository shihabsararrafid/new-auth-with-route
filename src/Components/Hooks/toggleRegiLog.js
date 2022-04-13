import { useState } from "react";


const Toggle = () => {
    const [visibilty, setVisibilty] = useState(0);
    return [visibilty, setVisibilty];
}
export default Toggle;