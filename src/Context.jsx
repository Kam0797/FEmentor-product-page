import { createContext, useState } from 'react'


export const Context = createContext();

const ContextProvider = ({children}) => {
      const [itemCount, setItemCount] = useState(0);
      const [nInCart, setNInCart] = useState(0);

      return (
            <Context.Provider value={{ itemCount, setItemCount, nInCart, setNInCart}}>
                  {children}
            </Context.Provider>
      );
};

export default ContextProvider

