import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export function PDFViewer({ isOpen, onClose, pdfUrl }: PDFViewerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-lg shadow-xl max-w-4xl w-full h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Resume</h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="h-[calc(90vh-64px)]">
              <iframe src={pdfUrl} className="w-full h-full" title="Resume PDF"></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
