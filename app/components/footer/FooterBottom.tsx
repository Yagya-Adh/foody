import Link from "next/link";

const data = [
  { id: 1, linkPath: "/", name: "Styleguide" },
  { id: 2, linkPath: "/licensing", name: "Licensing" },
  { id: 3, linkPath: "/changelog", name: "Changelog" },
  { id: 4, linkPath: "/password", name: "Password" },
  { id: 5, linkPath: "/error", name: "Error 404" },
];

const FooterBottom = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-between items-center border-t border-t-black py-2.5 lg:py-5">
      <div className="font-urbanist text-base xl:text-xl font-medium text-black/40">
        Built by{" "}
        <Link
          href="https://www.jamstackers.com"
          target="_blank"
          className="hover:underline"
        >
          Jamstackers{" "}
        </Link>
        Powered by{" "}
        <Link
          href="https://www.jamstackers.com"
          target="_blank"
          className="hover:underline"
        >
          Jamstackers
        </Link>
      </div>
      <div className="flex items-end flex-wrap mt-3.5">
        {data?.map((item) => (
          <Link
            href={item.linkPath}
            key={item.id}
            className="text-base xl:text-xl text-black/40 font-urbanist font-medium mx-4"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
