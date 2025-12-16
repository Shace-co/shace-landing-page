/**
 * Composable to safely get logo paths with baseURL handling
 * Ensures logos work correctly in both dev and production (GitHub Pages)
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
  
  return {
    getLogoPath
  }
}

