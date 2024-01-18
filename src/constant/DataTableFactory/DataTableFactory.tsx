import Chiefdom from "@/components/dataTable/[TerritorialCollectivity]"
import TerritorialCollectivity from "@/components/dataTable/[chiefdom]"
import ResourceZone from "@/components/dataTable/[ZoneResource]"
import Cadre from "@/components/dataTable/[cadre]"
import Locality from "@/components/dataTable/[locality]"
import Region from "@/components/dataTable/[region]"
import Senator from "@/components/dataTable/[senator]"
import Zone from "@/components/dataTable/[zone]"

const tableComponents: {[key: string]: React.FC} = {
    locality: Locality,
    region: Region,
    senator: Senator,
    zone: Zone,
    ZoneResource: ResourceZone,
    TerritorialCollectivity: TerritorialCollectivity,
    chiefdom: Chiefdom,
    cadre: Cadre,

}

export const getTableComponent = (option: string) : React.FC | null => {
    return tableComponents[option] || null
}