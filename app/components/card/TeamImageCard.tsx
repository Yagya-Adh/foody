import teamData from "@/lib/data/TeamData.json";
import Image from "next/image";

interface IITeamDatainterface {
  id: number;
  title: string;
  describe: string;
  image: string;
}
const data: IITeamDatainterface[] = teamData;
const TeamImageCard = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((list) => (
        <div
          className="flex flex-col justify-center items-center"
          key={list.id}
        >
          <Image
            src={list.image}
            width={220}
            height={220}
            alt={`${list.title}_image`}
            className="object-center object-cover h-auto w-auto mb-6"
          />
          <h3 className="font-oswald text-2xl text-center">{list.title}</h3>
          <p className="font-urbanist text-base font-normal text-center max-w-sm">
            {list.describe}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TeamImageCard;
