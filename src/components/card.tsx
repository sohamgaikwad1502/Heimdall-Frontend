import Add_icon from "../icons/Add_icon";
import Share_icon from "../icons/Share_icon";

interface cardItems {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

const Card = (props: cardItems) => {
  const { title, link, type } = props;

  return (
    <div>
      <div className="p-4 max-w-72 min-h-48 rounded-md ml-2 border-gray-200 bg-white border">
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 pr-4 ">
              <Add_icon size="md" />
            </div>
            <div className="text-gray-600 pr-4">
              <h1 className="pl-2 pr-2 text-md">{title}</h1>
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-600 pr-4">
            <div className="text-gray-600 pr-4">
              <Share_icon size="md" />
            </div>
            <div className="text-gray-600 pr-4">
              <Share_icon size="md" />
            </div>
          </div>
        </div>
        <div className="flex-col pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full "
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <div className="flex-col pt-4">
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
