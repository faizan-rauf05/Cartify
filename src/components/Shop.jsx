import {useLocation} from "react-router-dom";

function Shop(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    return <h1>{searchValue}</h1>;
}
export default Shop;