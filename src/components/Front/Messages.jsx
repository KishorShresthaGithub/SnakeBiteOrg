import DOMPurify from "dompurify";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-hook-inview";
import "@css/message.scss";

const images = [
  {
    id: 1,
    image: "https://i.pravatar.cc/300?img=12",
    message: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim a eaque
        ipsam, excepturi officia velit suscipit consectetur asperiores inventore
        blanditiis  nihil voluptas quis tempora repellat sit
        commodi porro amet, quidem tenetur ex harum quo repudiandae unde nam
        placeat commodi. Cumque adipisci modi sapiente fuga placeat expedita
        saepe, magnam in aperiam distinctio laudantium. Labore quidem vitae
        tempore, recusandae voluptatum magni accusamus obcaecati facilis fuga
        fugit? Ducimus reiciendis doloremque numquam blanditiis nihil accusamus
        impedit corporis nesciunt quisquam, possimus ipsam ad ea incidunt est,
        mollitia similique repellendus. Dicta vitae, cum fugit nemo numquam
        sapiente debitis obcaecati eligendi pariatur architecto at id, delectus
        et accusamus. Facilis dolores, quae ad aperiam quia ea voluptates
        adipisci dolorem non velit explicabo temporibus blanditiis, doloribus
        aliquid recusandae? Ut, cumque aspernatur quisquam quasi necessitatibus
        saepe, nobis asperiores, voluptate veniam at impedit delectus sunt
        deserunt? Explicabo, assumenda repellat optio quas excepturi ex id
        quidem sint illo earum laboriosam nihil et incidunt dolorem? Commodi
        accusantium debitis cumque sapiente similique doloribus. 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim a eaque
        ipsam, excepturi officia velit suscipit consectetur asperiores inventore
        blanditiis  nihil voluptas quis tempora repellat sit
        commodi porro amet, quidem tenetur ex harum quo repudiandae unde nam
        placeat commodi. Cumque adipisci modi sapiente fuga placeat expedita
        saepe, magnam in aperiam distinctio laudantium. Labore quidem vitae
        tempore, recusandae voluptatum magni accusamus obcaecati facilis fuga
        fugit? Ducimus reiciendis doloremque numquam blanditiis nihil accusamus
        impedit corporis nesciunt quisquam, possimus ipsam ad ea incidunt est,
        mollitia similique repellendus. Dicta vitae, cum fugit nemo numquam
        sapiente debitis obcaecati eligendi pariatur architecto at id, delectus
        et accusamus. Facilis dolores, quae ad aperiam quia ea voluptates
        adipisci dolorem non velit explicabo temporibus blanditiis, doloribus
        aliquid recusandae? Ut, cumque aspernatur quisquam quasi necessitatibus
        saepe, nobis asperiores, voluptate veniam at impedit delectus sunt
        deserunt? Explicabo, assumenda repellat optio quas excepturi ex id
        quidem sint illo earum laboriosam nihil et incidunt dolorem? Commodi
        accusantium debitis cumque sapiente similique doloribus.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim a eaque
        ipsam, excepturi officia velit suscipit consectetur asperiores inventore
        blanditiis  nihil voluptas quis tempora repellat sit
        commodi porro amet, quidem tenetur ex harum quo repudiandae unde nam
        placeat commodi. Cumque adipisci modi sapiente fuga placeat expedita
        saepe, magnam in aperiam distinctio laudantium. Labore quidem vitae
        tempore, recusandae voluptatum magni accusamus obcaecati facilis fuga
        fugit? Ducimus reiciendis doloremque numquam blanditiis nihil accusamus
        impedit corporis nesciunt quisquam, possimus ipsam ad ea incidunt est,
        mollitia similique repellendus. Dicta vitae, cum fugit nemo numquam
        sapiente debitis obcaecati eligendi pariatur architecto at id, delectus
        et accusamus. Facilis dolores, quae ad aperiam quia ea voluptates
        adipisci dolorem non velit explicabo temporibus blanditiis, doloribus
        aliquid recusandae? Ut, cumque aspernatur quisquam quasi necessitatibus
        saepe, nobis asperiores, voluptate veniam at impedit delectus sunt
        deserunt? Explicabo, assumenda repellat optio quas excepturi ex id
        quidem sint illo earum laboriosam nihil et incidunt dolorem? Commodi
        accusantium debitis cumque sapiente similique doloribus.`,
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/300?img=18",
    message: `um quo repudiandae unde nam
        placeat commodi. Cumque adipisci modi sapiente fuga placeat expedita
        saepe, magnam in aperiam distinctio laudantium. Labore quidem vitae
        tempore, recusandae voluptatum magni accusamus obcaecati facilis fuga
        fugit? Ducimus reiciendis doloremque numquam blanditiis nihil accusamus
        impedit corporis nesciunt quisquam, possimus ipsam ad ea incidunt est,
        mollitia similique repellendus. Dicta vitae, cum fugit nemo numquam
        sapiente debitis obcaecati eligendi pariatur architecto at id, delectus
        et accusamus. Facilis dolores, quae ad aperiam quia ea voluptates
        adipisci dolorem non velit explicabo temporibus blanditiis, doloribus
        aliquid recusandae? Ut, cumque aspernatur quisquam quasi necessitatibus
        saepe, nobis asperiores, voluptate veniam at impedit delectus sunt
        deserunt? Explicabo, assumenda repellat optio quas excepturi ex id
        quidem sint illo earum laboriosam nihil et incidunt dolorem? Commodi
        accusantium debitis cumque sapiente similique doloribus.`,
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/300?img=56",
    message: ` explicabo, illum exercitationem
        atque culpa aut similique reprehenderit vitae ea quasi repudiandae quo
        asperiores delectus nam iure sit minima, quia aliquid minus ex quaerat
        beatae laborum. Possimus libero nihil voluptas quis tempora repellat sit
        commodi porro amet, quidem tenetur ex harum quo repudiandae unde nam
        placeat commodi. Cumque adipisci modi sapiente fuga placeat expedita
        saepe, magnam in aperiam distinctio laudantium. Labore quidem vitae
        tempore, recusandae voluptatum magni accusamus obcaecati facilis fuga
        fugit? Ducimus reiciendis doloremque numquam blanditiis nihil accusamus
        impedit corporis nesciunt quisquam, possimus ipsam ad ea incidunt est,
        mollitia similique repellendus. Dicta vitae, cum fugit nemo numquam
        sapiente debitis obcaecati eligendi pariatur architecto at id, delectus
        et accusamus. Facilis dolores, quae ad aperiam quia ea voluptates
        adipisci dolorem non velit explicabo temporibus blanditiis, doloribus
        aliquid recusandae? Ut, cumque aspernatur quisquam quasi necessitatibus
        saepe, nobis asperiores, voluptate veniam at impedit delectus sunt
        deserunt? Explicabo, assumenda repellat optio quas excepturi ex id
        quidem sint illo earum laboriosam nihil et incidunt dolorem? Commodi
        accusantium debitis cumque sapiente similique doloribus.`,
  },
];

const Messages = () => {
  //main object
  const [main, setMain] = useState({});
  //loop
  const [isLoop, setLoop] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const [ref, isVisible] = useInView(
    {
      threshold: 1,

      onLeave: () => {
        setMain(images[0]);
      },
    },
    [isLoop]
  );

  const handleThumb = (object) => {
    setMain(object);
  };

  const nextSlider = useCallback(() => {
    if (!isLoop) return;

    let currentSlide = images.find((res) => res.id === main.id);

    let index = images.indexOf(currentSlide);
    let nextIndex = index + 1;

    if (nextIndex >= images.length) {
      setMain(images[0]);
    } else {
      setMain(images[nextIndex]);
    }
  }, [isLoop, main.id]);

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlider();
    }, 3000);

    return () => clearInterval(slider);
  }, [isLoop, nextSlider]);

  return (
    <div
      className="grid md:grid-cols-2 messages"
      ref={ref}
      onMouseOver={() => setLoop(false)}
      onMouseOut={() => setLoop(true)}
    >
      <div className="images ">
        <div className="image">
          <img src={main.image} alt="Ph" />
        </div>
        <div className="thumbs">
          {images.map((res, index) => (
            <div
              key={index}
              className={`thumb cursor-pointer rounded p-4 ${
                res.id === main.id ? "border-4" : ""
              } `}
              onClick={() => handleThumb(res)}
            >
              <img src={res.image} alt="Ph" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(main.message),
        }}
      ></div>
    </div>
  );
};

export default Messages;
