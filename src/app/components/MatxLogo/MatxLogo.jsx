import React from 'react'
import useSettings from 'app/hooks/useSettings'

const MatxLogo = ({ className }) => {
    const { settings } = useSettings()
    const theme = settings.themes[settings.activeTheme]

    return (
        <svg width="20" height="624" viewBox="0 0 538 624" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="393" height="531" fill="#3576CB" />
            <rect x="109" y="108" width="284" height="113" fill="#80ABDE" />
            <rect x="393" y="108" width="145" height="516" fill="#80ABDE" />
            <rect x="109" y="319" width="284" height="113" fill="#80ABDE" />
        </svg>
    )
}

export default MatxLogo
