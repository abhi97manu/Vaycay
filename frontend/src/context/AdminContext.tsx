import { createContext, useContext, useState, ReactNode } from 'react'

interface Modal {
    isOpen: boolean,
    openModal: () => void,
    closeModal: () => void
}


interface AdminContextValue {
    modal: Modal
}

const AdminContext = createContext<AdminContextValue | undefined>(undefined)

export function AdminContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const modal: Modal = { isOpen, openModal, closeModal }

    return (
        <AdminContext.Provider value={{ modal }}>
            {children}
        </AdminContext.Provider>
    )
}

export function useAdminContext() {
    const context = useContext(AdminContext)
    if (!context) {
        throw new Error('useAdminContext must be used within an AdminContextProvider')
    }
    return context
}
