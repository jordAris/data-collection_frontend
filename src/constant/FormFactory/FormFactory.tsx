import TerritorialCollectivity from "@/components/forms/[TerritorialCollectivity]";
import ZoneResource from "@/components/forms/[ZoneResource]";
import Cadre from "@/components/forms/[cadre]";
import Chiefdom from "@/components/forms/[chiefdom]";
import Forms from "@/components/forms/[locality]";
import Region from "@/components/forms/[region]";
import Senator from "@/components/forms/[senator]";
import Zone from "@/components/forms/[zone]";

const formComponents: {[key: string]: React.FC} ={
    locality: Forms,
    cadre: Cadre,
    TerritorialCollectivity: TerritorialCollectivity,
    chiefdom: Chiefdom,
    region: Region,
    senator: Senator,
    zone: Zone,
    ZoneResource: ZoneResource,
}

export const getFormComponent = (option: string) : React.FC | null => {
    return formComponents[option] || null
}