import { Icon } from '@/index'
import { ModalProps } from './types'
import { useCallback, BaseSyntheticEvent, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const Modal = (props: ModalProps) => {
  const {
    children,
    disableBackdropClick = false,
    disableClose = false,
    footer,
    id,
    isOpen,
    onClose,
    title,
  } = props

  const handleBackdropClose = useCallback(
    (e: BaseSyntheticEvent) => {
      if (disableBackdropClick) return
      if (e?.target.id === id || e?.target.id === 'modal-wrapper') onClose()
    },
    [disableBackdropClick, id, onClose],
  )
  useEffect(() => {
    const portalRoot = document.getElementById('portal-root')
    if (!portalRoot) {
      const root = document.createElement('div')
      root.id = 'portal-root'
      document.body.appendChild(root)
    }
  }, [])

  if (!document.getElementById('portal-root') || !isOpen) return

  return createPortal(
    <div
      aria-hidden="true"
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center transition-opacity ease-in-out duration-300`}
      id={id || 'modal-wrapper'}
      onClick={handleBackdropClose}
      role="dialog"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between px-4 pt-4 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            {!disableClose && (
              <button
                className="transition ease-in-out duration-200 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={onClose}
                type="button"
              >
                <Icon
                  color={'secondary'}
                  name="xmark"
                />
                <span className="sr-only">Close modal</span>
              </button>
            )}
          </div>
          <div className="p-4">{children}</div>
          {footer && (
            <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('portal-root'),
  )
}
