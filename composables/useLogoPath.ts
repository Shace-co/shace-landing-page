/**
 * Composable to safely get static asset paths with baseURL handling
 * Ensures assets work correctly in both dev and production (GitHub Pages)
 * 
 * Since baseURL is set to '/shace-landing-page/' in nuxt.config.ts,
 * we need to prefix all static asset paths with the baseURL.
 */
export const useLogoPath = () => {
  const BASE_URL = '/shace-landing-page'
  
  /**
   * Get a logo path with proper baseURL handling
   * @param logoName - Name of the logo file (e.g., 'shace-logo-white.svg' or 'logo01.svg')
   * @returns Full path to the logo with baseURL prefix
   */
  const getLogoPath = (logoName: string): string => {
    // Remove leading slash if present
    const cleanName = logoName.startsWith('/') ? logoName.slice(1) : logoName
    // Ensure it's in the logos directory
    const path = cleanName.startsWith('logos/') ? cleanName : `logos/${cleanName}`
    
    // Always prefix with baseURL to ensure it works in both dev and production
    return `${BASE_URL}/${path}`
  }
  
  /**
   * Get an image path with proper baseURL handling
   * @param imagePath - Path to the image (e.g., '/images/dashboard-preview.png' or 'images/dashboard-preview.png')
   * @returns Full path to the image with baseURL prefix
   */
  const getImagePath = (imagePath: string): string => {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
    
    // Always prefix with baseURL to ensure it works in both dev and production
    return `${BASE_URL}/${cleanPath}`
  }
  
  return {
    getLogoPath,
    getImagePath
  }
}

