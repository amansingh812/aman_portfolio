'use client'
/**
 * Client reviews slider — same swiper-card layout as the Agon template's
 * TestimonialSlider, but data-driven from content/site.js (REVIEWS) instead
 * of the template's placeholder names. Renders nothing when REVIEWS is
 * empty rather than showing broken/fake cards — see CLAUDE.md §1.
 */
import Image from "next/image"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { REVIEWS } from "@/content/site"

const BG_CYCLE = ["", "bd-bg-6", "bd-bg-10", "bd-bg-6"]

const ClientReviews = () => {
  if (!REVIEWS || REVIEWS.length === 0) return null

  // Swiper loop mode needs enough slides to fill a view; duplicate if short.
  const data = REVIEWS.length >= 4 ? REVIEWS : [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS]

  return (
    <div className="box-swiper">
      <div className="swiper-container swiper-group-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={Math.min(4, REVIEWS.length)}
          spaceBetween={30}
          loop={REVIEWS.length > 1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-reviews",
            nextEl: ".swiper-button-next-reviews",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: Math.min(2, REVIEWS.length) },
            1200: { slidesPerView: Math.min(4, REVIEWS.length) },
          }}
          className="swiper-wrapper pb-70 pt-5"
        >
          {data.map((item, i) => (
            <SwiperSlide key={`${item.name}-${i}`}>
              <div className="swiper-slide active">
                <div className={`card-grid-style-3 hover-up ${BG_CYCLE[i % BG_CYCLE.length]}`}>
                  {item.avatar && (
                    <div className="grid-3-img">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src={item.avatar}
                        alt={item.name}
                      />
                    </div>
                  )}
                  <h3 className="text-heading-6 mb-5 mt-20">{item.name}</h3>
                  <span className="text-body-small d-block">{item.company}</span>
                  <p className="text-body-text text-desc color-gray-500 mt-20">{item.quote}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-next swiper-button-next-reviews" />
      <div className="swiper-button-prev swiper-button-prev-reviews" />
    </div>
  )
}

export default ClientReviews
