export interface Category {
  catgNm: string
  pCatgSeq?: number
}

export interface RollingBanner {
  bannerNm: string
  bannerSeq: number
  catgSeq?: string
  colorCd: string
  eventSeq?: string
  imgFileNm: string
  imgFileNmThumb?: string
  imgPath: string
  imgPathThumb: string
  linkTycd: string
  links: string[]
  pCatgSeq?: string
  prodSeq: number
  url?: string
  urlOpenFlg?: string
}

export interface SubCategory {
  catgNm?: string
  pCatgSeq?: number
  subCatgList?: SubCategoryList[]
}

export interface SubCategoryList {
  catgCnt?: string
  catgNm: string
  catgSeq: number
  links?: string[]
}

export interface Region {
  cd: string
  cdNm: string
}
