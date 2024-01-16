import { Color } from '@/types'

type TypographyProps = {
  /**
   * Typography bileşeni contentinde render edilir.
   */
  children: string
  /**
   * Typography bileşini rengini temsil eden proptur.
   *  @default primary
   */
  color?: Color
  /**
   * Typography bileşeni class namelerini temsil eden proptur.
   */
  className?: string
  /**
   * Typography bileşeni text wrap değereni temsil eder.
   * @default true
   */
  disableNoWrap?: boolean
  /**
   * Typography bileşeni id değerini temsil eden proptur.
   */
  id?: string
  /**
   * Typography bileşeni varyant değerini temsil eden proptur.
   * @default body
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body'
  /**
   * Typography bileşeni boyutunu temsil eden proptur.
   * @default md
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Typography bileşeni karakterler arası boşluğu temsil eden proptur.
   * @default normal
   */
  spacing?: 'tight' | 'normal' | 'wide'
  /**
   * Typography bileşeni font kalınlığını temsil eden proptur.
   * @default normal
   */
  weight?: 'bold' | 'normal' | 'thin'
  /**
   * Typography bileşeni word break temsil eden proptur.
   * @default normal
   */
  wordBreak?: 'normal' | 'all' | 'words'
}
export { TypographyProps }
