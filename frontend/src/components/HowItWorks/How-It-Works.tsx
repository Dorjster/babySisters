// Photos from https://citizenofnowhe.re/lines-of-the-city

"use client";
import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const text = [
    {
      idText: 1,
      content:
        "Энэхүү веб сайтыг ашиглан хүүхэд асрагчид, эцэг эхчүүд хялбар байдлаар нэгнээ олох боломжтой.",
    },
    {
      idText: 2,
      content:
        "И-мэйл хаяг, нууц үгээр нэвтэрсний дараагаар бусад хэрэглэгчдийн холбогдох мэдээллийг харна",
    },
    {
      idText: 3,
      content:
        "Хэрэв бүртгэлгүй бол (Бүртгүүлэх) хэсэгт өөрийн хувийн мэдээллээ бөглөн бүртгэлээ үүсгэнэ",
    },
    {
      idText: 4,
      content:
        "Утасны дугаар болон и-мэйл хаягаар хоорондоо холбогдож, тохиролцоно.",
    },
    { idText: 5, content: "Нэмэлтээр мессенжер ашиглан холбогдох боломжтой" },
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const currentText = text.find((item) => item.idText === id)?.content || "";

  return (
    <div className="dark:bg-[#31363F]">
      <section>
        <div ref={ref} className={""}>
          <img id="imgHIW" src={`/${id}.jpeg`} alt="A London skyscraper" />
        </div>
        <motion.div
          className="dark:bg-transparent rounded-2xl px-[20px]  "
          style={{ y: useParallax(scrollYProgress, 300) }}
        >
          <motion.h2 className="dark:text-slate-200">
            <p>{currentText}</p>
          </motion.h2>
        </motion.div>
      </section>
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
