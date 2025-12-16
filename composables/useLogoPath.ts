/**
 * Composable to safely get logo paths with baseURL handling
 * Ensures logos work correctly in both dev and production (GitHub Pages)
 * 
 * In Nuxt 3, paths starting with '/' are automatically prefixed with baseURL during build.
 * This composable provides extra safety and consistency.
 */
export const useLogoPath = () => {
  /**
   * Get a logo path with proper baseURL handling
   * @param logoName - Name of the logo file (e.g., 'shace-logo-white.svg' or 'logo01.svg')
   * @returns Full path to the logo (Nuxt will automatically prefix with baseURL)
   */
  const getLogoPath = (logoName: string): string => {
    // Remove leading slash if present
    const cleanName = logoName.startsWith('/') ? logoName.slice(1) : logoName
    // Ensure it's in the logos directory
    const path = cleanName.startsWith('logos/') ? cleanName : `logos/${cleanName}`
    // Return with leading slash - Nuxt will automatically handle baseURL prefixing
    return `/${path}`
  }
  
  return {
    getLogoPath
  }
}

