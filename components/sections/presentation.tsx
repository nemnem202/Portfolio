import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../atoms/sectionTitle";
import ShinyText from "../atoms/shinyText";
import Tag from "../atoms/tag";
import Title from "../atoms/title";
import ParallaxBox from "../layout/parallaxBox";
import Section, { SectionContent } from "../layout/section";
import { SequenceItem } from "../layout/sequenceItem";
import SizeAdapter from "../layout/size-adapter";
import { Button } from "../ui/button";

export default function PresentationSection() {
  return (
    <Section id="presentation">
      <SectionContent className="flex gap-12" animateOnScroll={false}>
        <SizeAdapter md={<DesktopPresentation />} sm={<MobilePresentation />} />
      </SectionContent>
      <SectionTitle>Me</SectionTitle>
    </Section>
  );
}

function DesktopPresentation() {
  return (
    <div className="md:grid md:grid-cols-15 md:grid-rows-10 size-full">
      <SequenceItem
        index={0}
        className="col-start-6 col-end-9 row-start-4 row-end-8size-full flex items-center justify-center"
      >
        <ParallaxBox className=" rounded-full w-full aspect-square shadow-2xl shadow-primary/40">
          <img
            className="size-full rounded-full mx-auto object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
            alt="Avatar"
          />
        </ParallaxBox>
      </SequenceItem>
      <SequenceItem
        index={1}
        className="col-start-1 col-end-6 row-start-1 row-end-4 size-full flex items-center justify-center"
      >
        <div className=" size-full rounded-lg">
          <p>
            Ad aute do sint in mollit pariatur exercitation qui ex laborum. Cupidatat Lorem culpa
            occaecat proident proident enim. Ea proident do esse nostrud labore. Occaecat laborum
            occaecat qui velit consectetur magna. Sunt culpa ea qui reprehenderit. Aliquip culpa
            nisi labore qui sint labore fugiat velit ea. Anim aute esse sit reprehenderit occaecat.
            Ea proident do esse nostrud labore. Occaecat laborum occaecat qui velit consectetur
            magna.
          </p>
        </div>
      </SequenceItem>
      <SequenceItem
        index={2}
        className="col-start-2 col-end-5 row-start-7 row-end-10 size-full flex items-center justify-center"
      >
        <div className=" size-full rounded-lg">
          Officia dolor sint aliqua nulla ex nisi cupidatat anim sit voluptate ullamco incididunt
          elit id. Eiusmod ipsum ut culpa deserunt aliquip laboris in ex velit est. In amet mollit
          laboris commodo cillum ea. In amet mollit laboris commodo cillum ea.
        </div>
      </SequenceItem>

      <SequenceItem
        index={3}
        className="col-start-10 col-end-16 row-start-2 row-end-5 size-full flex items-center justify-center"
      >
        <div className=" size-full rounded-lg">
          Sint ea nostrud tempor deserunt et esse do anim laboris eiusmod. Quis magna esse
          reprehenderit labore ipsum. Qui quis exercitation quis consectetur incididunt ex magna
          deserunt ut id laboris ad non elit. Fugiat Lorem adipisicing dolor dolore consequat dolor
          culpa. Minim irure fugiat proident nulla culpa nisi magna in duis enim ullamco dolore
          velit. Enim ipsum consequat consequat mollit quis ut velit enim ut laborum in veniam sunt.
          Incididunt veniam adipisicing nostrud magna proident. Enim esse voluptate laborum
          consectetur. Qui minim aliquip sunt in tempor sunt.
        </div>
      </SequenceItem>
      <SequenceItem
        index={4}
        className="col-start-9 col-end-16 row-start-8 row-end-11 size-full flex items-center justify-center"
      >
        <div className=" size-full rounded-lg">
          Exercitation fugiat tempor ad nostrud commodo deserunt excepteur. Qui dolor duis eiusmod
          magna ullamco cillum amet ad occaecat irure duis ad cupidatat. Dolor quis sunt ullamco
          quis nostrud magna est id.Elit non in proident pariatur ut non anim enim elit aliquip id
          officia velit. Amet non veniam reprehenderit ipsum laboris ipsum ullamco amet. Deserunt
          qui sunt tempor voluptate esse anim non laboris aute consectetur. Ipsum excepteur non
          deserunt ad aliquip minim dolore ea et et. Sunt enim duis enim qui consequat consequat.Id
          voluptate Lorem ex sunt aliqua culpa ipsum est irure deserunt amet Lorem. Esse id deserunt
          aliquip laborum. In laborum ipsum ea cillum.
        </div>
      </SequenceItem>
    </div>
  );
}

function MobilePresentation() {
  const tags = ["React", "Angular", "Typescript", "NodeJS", "Express", "Fastify", "Docker"];
  return (
    <SectionContent className="flex flex-col size-full items-center justify-between">
      <div className="flex flex-col size-full items-center gap-5">
        <SequenceItem className="my-5" index={0}>
          <ParallaxBox className=" rounded-full w-full aspect-square shadow-2xl shadow-primary/40">
            <img
              className="size-full rounded-full mx-auto object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
              alt="Avatar"
            />
          </ParallaxBox>
        </SequenceItem>
        <div className="flex flex-col items-center">
          <SequenceItem index={1}>
            <Title text="Naïm El Habbas" />
          </SequenceItem>
          <SequenceItem index={2}>
            <h2>
              <ShinyText text="Fullstack developper" />
            </h2>
          </SequenceItem>
        </div>
        <SequenceItem index={3}>
          <p className="text-center italic text-muted-foreground">
            Proident minim sit sint enim ex esse enim. Labore elit in eiusmod est qui laboris
            laboris amet cillum dolor laboris deserunt duis.
          </p>
        </SequenceItem>
        <div className="flex w-full flex-wrap gap-2 justify-center">
          {tags.map((v, i) => (
            <SequenceItem index={i + 4}>
              <Tag>{v}</Tag>
            </SequenceItem>
          ))}
        </div>
      </div>
      <div className="w-full gap-3 flex justify-end items-center">
        <SequenceItem index={tags.length + 4}>
          <a className="rounded-full hover:text-primary transition-all cursor-pointer">
            <FaGithub className="h-8 w-8" />
          </a>
        </SequenceItem>
        <SequenceItem index={tags.length + 5}>
          <a className="rounded-full hover:text-primary hover:text-primary transition-all cursor-pointer">
            <FaLinkedin className="h-8 w-8" />
          </a>
        </SequenceItem>
      </div>
    </SectionContent>
  );
}
