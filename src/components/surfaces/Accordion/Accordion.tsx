import { cva } from 'class-variance-authority'
import { AccordionProps } from './types'
import { cn } from '@/lib/utils'
import { ReactNode, useCallback, useState } from 'react'
import { Icon } from '@/components/data-display'

const accordionClasses = cva('', {
  variants: {},
})

const AccordionTitle = ({
  title,
  isFirst,
  active,
  setActive,
  startEdornment,
}: {
  title: string
  isFirst: boolean
  active: boolean
  setActive: () => void
  startEdornment: ReactNode
}) => (
  <h2 onClick={setActive}>
    <button
      className={`flex items-center justify-between ${isFirst ? ' rounded-t-xl' : ' '}  w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
    >
      <span className="flex items-center gap-3">
        {startEdornment}
        {title}
      </span>
      <Icon
        color="secondary"
        name={active ? 'chevron-up' : 'chevron-down'}
        size={'sm'}
      />
    </button>
  </h2>
)

const AccordionBody = ({ body, active }: { body: ReactNode; active: boolean }) => {
  return (
    <div className={!active ? 'hidden' : ''}>
      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        {body}
      </div>
    </div>
  )
}
export const Accordion = (props: AccordionProps) => {
  const { id, children, className, items = [], ...rest } = props
  const [active, setActive] = useState(null)

  const setActiveFn = useCallback(
    (activeIdx: number) => {
      if (active === activeIdx) {
        setActive(null)
      } else {
        setActive(activeIdx)
      }
    },
    [active, setActive],
  )
  return (
    <div
      className={cn(accordionClasses({ className }))}
      id={id}
      {...rest}
    >
      {items?.length > 0 &&
        items?.map((item, idx) => {
          return (
            <div
              id={item?.id}
              key={`accordion-item-${idx}`}
            >
              <AccordionTitle
                active={active === idx}
                isFirst={idx === 0}
                setActive={() => setActiveFn(idx)}
                startEdornment={item?.startEdornment}
                title={item?.title}
              />
              <AccordionBody
                active={active === idx}
                body={item?.body}
              />
            </div>
          )
        })}
    </div>
  )
}
