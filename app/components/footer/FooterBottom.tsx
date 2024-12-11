import Link from "next/link";

const data = [
  { id: 1, linkPath: "/", name: "Styleguide" },
  { id: 2, linkPath: "/", name: "Licensing" },
  { id: 3, linkPath: "/", name: "Changelog" },
  { id: 4, linkPath: "/", name: "Password" },
  { id: 5, linkPath: "/", name: "Error 404" },
];

const FooterBottom = () => {
  return (
    <div className="flex justify-between items-center border-t border-t-black lg:py-5">
      <div className="font-urbanist text-base font-medium text-black/40">
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
      <div className="flex justify-end items-end">
        {data?.map((item) => (
          <Link
            href={item.linkPath}
            key={item.id}
            className="lg:text-base text-black/40 font-urbanist font-medium mx-4"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
