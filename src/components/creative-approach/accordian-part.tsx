import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/tailwind-components/ui/accordion"

interface AccordionItemType {
  title: string
  description: string
}

const AccordionItemList: AccordionItemType[] = [
  {
    title: "What is an optpdoce text-to-voice platform?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, esse dolor! Quod laborum maiores mollitia minus blanditiis veniam sequi inventore animi ipsum impedit modi nam, nisi nemo eos dicta explicabo expedita voluptate illo!",
  },
  {
    title: "How does an ThinkAi text-to-voice platform work?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, esse dolor! Quod laborum maiores mollitia minus blanditiis veniam sequi inventore animi ipsum impedit modi nam, nisi nemo eos dicta explicabo expedita voluptate illo!",
  },
  {
    title: "Can I customize the voice of thegenerated speech?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, esse dolor! Quod laborum maiores mollitia minus blanditiis veniam sequi inventore animi ipsum impedit modi nam, nisi nemo eos dicta explicabo expedita voluptate illo!",
  },
]

const AccordianPart = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full max-w-[900px] mt-[30px]'
    >
      {AccordionItemList.map((acc, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className='text-[30px]'>
            {acc.title}
          </AccordionTrigger>
          <AccordionContent className='text-[20px]'>
            {acc.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordianPart
