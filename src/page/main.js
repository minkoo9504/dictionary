import DicList from "../components/diclist";
import DicSerch from "../components/dicserch";
const Main = ({datas}) => {
    return ( 
        <div className="main">
            <h1>Main</h1>
            <DicSerch />
            <DicList datas={datas} /> 
        </div>
     );
}
 
export default Main;