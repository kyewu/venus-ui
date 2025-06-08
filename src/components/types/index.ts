export * from './swiper-item.type'
export * from './card.type'
export * from './footer.type'

export interface GenericType<T> {
  items: T[]
  selectedItem?: T
}