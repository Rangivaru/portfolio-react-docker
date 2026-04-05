import { months, schoolsAndEnterprises, theData, years } from "@/app/data/experiences";

interface ExperienceProps {
  sectionRef: any;
}

export default function Experiences({ sectionRef }: ExperienceProps) {
    return (
        <div className="w-full" id="experiences" ref={sectionRef}>
            <h3 className='text-3xl mb-4 mt-16 uppercase font-semibold'>Expériences</h3>
            <div className="overflow-x-auto pb-6 w-full flex flex-col">
                <div className="flex w-full items-center gap-2">
                    <div className='w-full pl-[104px] lg:pl-28 pr-16 flex items-center'>
                        {months.map((month, index) => (<p  key={index} className='text-xs min-w-[60.69px]'>{month}</p>))}
                    </div>
                    <div className='flex h-full flex-col invisible justify-center'>
                        <p className='text-[0.6rem]'>École</p>
                        <p className='text-[0.6rem]'>Alternance</p>
                    </div>
                </div>
                <div className="flex flex-col  gap-4 ">
                    {years.map((year, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <p className='w-12'>{year}</p>
                            <div className='flex h-full flex-col justify-center items-end'>
                                <p className='text-[0.6rem]'>École</p>
                                <p className='text-[0.6rem]'>Alternance</p>
                            </div>
                            <div className="">
                                <div className='flex flex-col overflow-x-auto gap-1'> {/* Set the width and overflow */}
                                    <div className="grid-row">
                                        {theData[index]?.content[0].map((data, idx2) => (
                                            <div
                                                key={`year-${year}-week-1-${idx2}`}
                                                className={`${data === 3 ? "bg-blue-efrei" : data === 4 ? "bg-blue-esgi-light" : data === 5 ? "bg-orange-vinci" : data === 6 ? "bg-red-stnicolas" : data === 0 && "bg-[#202732]"} rounded-sm`}
                                            />
                                        ))}
                                    </div>
                                    <div className="grid-row">
                                        {theData[index]?.content[1].map((data, idx3) => (
                                            <div
                                                key={`year-${year}-week-2-${idx3}`}
                                                className={`${data === 0 ? "bg-[#202732]" : data === 1 ? "bg-red-sncf" : data === 2 && "bg-blue-rjs"} rounded-sm`}
                                            />
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                <div className='flex flex-wrap gap-x-8 mt-8 gap-y-4 items-center'>
                    {schoolsAndEnterprises.map((item, index) => (<div key={index} className='flex items-center gap-2'>
                        <div className={`${item.color} rounded-sm w-4 h-4`}></div>
                        <p>{item.title}</p>
                    </div>))}
                </div>
        </div >
    )
}