import { Modal } from 'bootstrap'
import React, { useRef } from 'react'

export default function useDialog() {
    const modal = useRef(null)
    const open = () => {
        new Modal(modal.current).show()
    }
    const close = () => {
        Modal.getInstance(modal.current).hide()
    }
    return { modal, open, close }
}
