import React from 'react';
import { ITheme } from '../../Types/ITheme';


const MainContext = React.createContext<ITheme>({});

const { Provider, Consumer } = MainContext;

export { Provider, Consumer }

export default MainContext;

