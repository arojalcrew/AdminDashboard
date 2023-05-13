import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar, ThemeSettings} from './components';
import {Ebiznes, Zamówienia, Kalendarz, Pracownicy, Stacked, 
    Pyramid, Klienci, Kanban, Warstwowy, Słupkowy, Kołowy, Finansowy, 
    ColorPicker, ColorMapping, Login, Liniowy, Edytor} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
    

  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                    <TooltipComponent content="Ustawienia" position="Top">
                        <button type="button" onClick={() => setThemeSettings(true)} className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background: currentColor, borderRadius: '50%'}}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div className={
                    `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72'
                    : 'flex-2'}`
                    }>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>
                <div>
                    {themeSettings && <ThemeSettings />}

                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={<Ebiznes />} />
                        <Route path="/E-Biznes" element={<Ebiznes />} />

                        {/* Pages */}
                        <Route path="/Zamówienia" element={<Zamówienia />} />
                        <Route path="/Pracownicy" element={<Pracownicy />} />
                        <Route path="/Klienci" element={<Klienci />} />
                        
                        {/* Apps */}
                        <Route path="/kanban" element={<Kanban />} />
                        <Route path="/Edytor" element={<Edytor />} />
                        <Route path="/Kalendarz" element={<Kalendarz />} />
                        <Route path="/Narzędzie do wybierania kolorów" element={<ColorPicker />} />

                        {/* Charts */}
                        <Route path="/Liniowy" element={<Liniowy />} />
                        <Route path="/Warstwowy" element={<Warstwowy />} />
                        <Route path="/Słupkowy" element={<Słupkowy />} />
                        <Route path="/Kołowy" element={<Kołowy />} />
                        <Route path="/Finansowy" element={<Finansowy />} />
                        <Route path="/Mapowania kolorów" element={<ColorMapping />} />
                        <Route path="/Piramidy" element={<Pyramid />} />
                        <Route path="/Skumulowany" element={<Stacked />} />
                    </Routes>
                </div>
            </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App