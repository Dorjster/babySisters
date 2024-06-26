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
import { bgcolor } from "@mui/system";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Images({ id }: { id: number }) {
  const text = [
    {
      idText: 6,
      tips: "Зөвлөгөө 1. Профайл зураг",
      content:
        "  Сайхан, гэхдээ бас нухацтай (мэргэжлийн) харагдах сайхан зургийг ашигла. Таны царай тод харагдаж байгаа эсэхийг шалгаарай. Анхны сэтгэгдэл үнэхээр чухал бөгөөд хүүхэд асрагчийн хувьд та мэдээж эерэг, мэргэжлийн, найдвартай гэж харагдахыг хүсдэг.",
    },
    {
      idText: 7,
      tips: "Зөвлөгөө 2. Урам зориг",
      content:
        "  Профайл зургийн хажууд Babysits-ийн эцэг эхчүүд таны профайл дээр хамгийн түрүүнд сэдэл харах болно. Та өөрийн урам зоригийг виртуал нэрийн хуудас гэж төсөөлж болно. Өөрийгөө хэн бэ, яагаад хүүхэд асрагчаар ажиллах хүсэлтэй байгаа, ямар туршлага хуримтлуулж байгаагаа тайлбарлах хүчтэй урам зоригтой байх нь чухал. Ингэснээр та эцэг эхийн анхаарлыг татаж, хүүхэд асрах ажил олох боломжоо нэмэгдүүлэх боломжтой.",
    },
    {
      idText: 8,
      tips: "Зөвлөгөө 3. Туршлага",
      content:
        "  Хүүхэд асрах болон хүүхэд асрах талаар ямар туршлага хуримтлуулсан тухайгаа тодорхой зааж өгөх хэрэгтэй. Жишээлбэл, та гэр бүлтэйгээ хэдэн жил ажилласан уу, эсвэл онцгой хэрэгцээтэй хүүхдүүдтэй ажиллаж байсан туршлагатай юу? Үүнийг профайл дээрээ дурдаарай! Та мөн өмнө нь ажиллаж байсан гэр бүлээсээ өөрийн профайл дээр лавлагаа эсвэл шүүмж үлдээхийг хүсч болно.",
    },
    {
      idText: 9,
      tips: "Зөвлөгөө 4. Боловсрол",
      content:
        " Та хүүхэд асрахтай холбоотой зохих гэрчилгээ эсвэл зэрэгтэй юу? Боловсролын талаарх шинэчилсэн тоймоо (суралцаж байгаа эсвэл сурсан зүйлээ) оруулахаа мартуузай!",
    },
    {
      idText: 10,
      tips: "Зөвлөгөө 5. Мэргэжилтнүүд",
      content:
        "  Хэрэв танд хоёрдахь хэл, гэрийн даалгавар, хөгжмийн зэмсэг тоглох эсвэл өөр хобби гэх мэт онцгой зүйл байгаа бол үүнийг өөрийн профайл дээрээ хуваалцах нь ашигтай байх болно.",
    },
    {
      idText: 11,
      tips: "Зөвлөгөө 6. Хүүхэд асрах хувь",
      content:
        "  Ихэнх асрагч нар хүүхэд харж байгаад мөнгө олохыг хүсдэг. Ийм учраас та хүүхэд асрах ажилд нэг цагт хэр их мөнгө олохыг хүсч байгаагаа профайл дээрээ оруулах нь чухал юм. Хэр их асуухаа мэдэхгүй байна уу? Та өөрийн профайл дээрх цагийн үнийг оруулахдаа бусад асрагч нараас юу асууж байгааг харах боломжтой.",
    },
    {
      idText: 12,
      tips: "Зөвлөгөө 7. Олдоц",
      content:
        " Өөр нэг чухал зөвлөгөө бол боломжоо тодорхой зааж өгөх явдал юм. Ингэснээр та боломжгүй үед бусад гишүүд тантай хүүхэд харахаар холбогдохоос зайлсхийх боломжтой. Таны боломжит хугацааг үе үе хянаж, шинэчлэх нь чухал бөгөөд таны боломж өөрчлөгдсөн тохиолдолд үүнийг өөрчлөх нь чухал юм.",
    },
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const currentText = text.find((item) => item.idText === id)?.content || "";
  const currentTips = text.find((item) => item.idText === id)?.tips || "";

  return (
    <section>
      <div ref={ref}>
        <img id="imgHIW" src={`/${id}.jpeg`} alt="A London skyscraper" className=""/>
      </div>
      <motion.div style={{ y: useParallax(scrollYProgress, 300) }} className="bg-transparent">
        <motion.h2 className="dark:text-white">
          <p>{currentTips}</p>
          <p>{currentText}</p>
        </motion.h2>
      </motion.div>
    </section>
  );
}

export default function Tips() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="dark:bg-[#31363F]">
      {[6, 7, 8, 9, 10, 11, 12].map((id) => (
        <Images key={id} id={id} />
      ))}

      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}
