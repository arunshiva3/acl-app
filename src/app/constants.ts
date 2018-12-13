/**
 * This is to set pages authorized pages for admin and user
 * @type {{admin: string[], user: string[]}}
 */
export const ACLData = {
  admin: ['login', 'logout', 'admin', 'surveyConfig','labelData'],
  user: ['login', 'logout', 'labelData']
}
