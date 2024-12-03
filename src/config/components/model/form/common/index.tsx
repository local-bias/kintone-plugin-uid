import { getCommonPropertyAtom } from '@/config/states/plugin';
import { t } from '@/lib/i18n';
import { JotaiText } from '@konomi-app/kintone-utilities-jotai';
import {
  PluginFormDescription,
  PluginFormSection,
  PluginFormTitle,
} from '@konomi-app/kintone-utilities-react';
import { FC } from 'react';

const Component: FC = () => (
  <div className=''>
    <iframe
      src='http://localhost:4321/kintone-plugin/common-config'
      className='w-full h-[720px] border-0'
    ></iframe>
  </div>
);

export default Component;
