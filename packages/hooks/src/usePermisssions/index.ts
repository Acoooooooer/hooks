import { useRef } from 'react';

interface IPermissionProps {
  /** type:
   *  page 页面权限
   *  slot 页面模块： 组件权限、按钮权限 
   */
  type: 'page' | 'slot';
  /**对应访问的权限功能 */
  authCode: string
}

function usePermisssions<T>(permissionProps: IPermissionProps) {
  const { type = 'page', authCode } = permissionProps;

  let hasPermission = false;




  return hasPermission;
}

export default usePermisssions;
