'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import type { components } from '../generated/dtype';
import Typography from '@mui/material/Typography';
import Autoplay from 'embla-carousel-autoplay';
import { MEDIA_URL } from '../utils/api';
import Box from '@mui/material/Box';
import Image from 'next/image';

type TopCarouselProps = {
    content: components['schemas']['SliderSerializer'][]
}

export default function TopCarousel({ content }: TopCarouselProps ) {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', py: 6, bgcolor: '#0f172a' }}>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                opts={{
                    align: "center",
                    loop: true,
                    direction: "rtl"
                }}
                className="w-full max-w-6xl relative"
            >
                <CarouselContent>
                    {content.map((slide, index) => (
                        <CarouselItem key={slide.image}>
                            <Box
                                className="relative w-full h-100 md:h-150 rounded-xl overflow-hidden shadow-2xl"
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Image
                                    src={`${MEDIA_URL}/${slide.image}`}
                                    alt={slide.description || "Carousel slide"}
                                    fill
                                    priority={index === 0}
                                    className="object-cover"
                                    sizes="(max-width: 1200px) 100vw, 1200px"
                                />
                                {/* Text overlay */}
                                <Typography 
                                    component={'h2'} 
                                    variant='h2' 
                                    className='relative z-10 text-white bg-[#6c6c6c4d] p-4 text-2xl font-bold rounded-md'
                                >
                                    {slide.description}
                                </Typography>
                            </Box>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Box>
    );
};