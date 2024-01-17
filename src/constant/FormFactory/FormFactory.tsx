import TerritorialCollectivity from "@/components/forms/[TerritorialCollectivity]";
import Cadre from "@/components/forms/[cadre]";
import Forms from "@/components/forms/[locality]";

const formComponents: {[key: string]: React.FC} ={
    locality: Forms,
    cadre: Cadre,
    TerritorialCollectivity: TerritorialCollectivity,
}

export const getFormComponent = (option: string) : React.FC | null => {
    return formComponents[option] || null
}