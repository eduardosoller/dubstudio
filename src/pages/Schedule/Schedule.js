import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import './style.css'
// import Appointments from './Appointments';

import AgendaDub from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

export default function Schedule() {
  const eventsSource = [
    {
      id: 'sala01',
      googleCalendarId: '6ul0kec8jcjhe693o9ktsf4f94@group.calendar.google.com',
      backgroundColor: 'rgb(17, 104, 123)',
      eventBackgroundColor: 'rgb(17, 104, 123)',
      eventBorderColor: 'transparent',
      className: 'blueRoom'
    },
    {
      id: 'sala02',
      googleCalendarId: 'studiodub@gmail.com',
      backgroundColor: 'rgb(149, 16, 10)',
      className: 'redRoom'
    }
  ]
  const calendarRef = React.createRef()

  const [title, setTitle] = useState('')
  const [currentSala, setCurrentSala] = useState('')
  const sala01 = eventsSource[0]
  const sala02 = eventsSource[1]
  const [events, setEvents] = useState([sala01, sala02])

  const handleLoadEvents = value => {
    currentSala === value.id ? setCurrentSala('') : setCurrentSala(value.id)
  }
  useEffect(() => {
    currentSala
      ? setEvents(eventsSource.filter(item => item.id === currentSala))
      : setEvents(eventsSource)
    // eslint-disable-next-line
  }, [currentSala])

  const getTitle = () =>
    setTitle(calendarRef.current.getApi().view.getCurrentData().viewTitle)
  const prev = () => calendarRef.current.getApi().prev()
  const next = () => calendarRef.current.getApi().next()

  const responsiveView = args =>
    window.innerWidth <= 992
      ? args.view.calendar.changeView('listWeek')
      : args.view.calendar.changeView('timeGridWeek')

  const customStyle = info => {
    if (info.event.studio === 'salaazul') {
      info.el.style.backgroundColor = 'red'
    }
  }

  return (
    <>
      <div>
        <section id="home" className="Schedule">
          <Header />
          <div className="flex-container">
            <Navigation />
            <div id="containerSchedule">
              <main>
                <div className="row">
                  <div className="fc">
                    <div className="fc-header-toolbar">
                      <div className="fc-toolbar-title">
                        <h2>AGENDA</h2>
                        <div className="fc-toolbar-date">
                          <span className="divider"></span>
                          <span className="date-text"> {title}</span>
                        </div>
                      </div>

                      <div className="fc-toolbar-buttons">
                        <div className="fc-button-group toggle-buttons">
                          <button
                            className={`fc-sala01button-button fc-button ${
                              currentSala === 'sala01' ? 'active' : ''
                            }`}
                            onClick={() => handleLoadEvents(sala01)}
                          >
                            SALA 01
                          </button>
                        </div>
                        <div className="fc-button-group toggle-buttons">
                          <button
                            className={`fc-sala02button-button fc-button ${
                              currentSala === 'sala02' ? 'active' : ''
                            }`}
                            onClick={() => handleLoadEvents(sala02)}
                          >
                            SALA 02
                          </button>
                        </div>
                        <div className="fc-button-group schedule-navigation-buttons">
                          <button
                            type="button"
                            className="fc-next-button fc-button"
                            onClick={prev}
                          >
                            <span className="fc-icon fc-icon-chevron-left"></span>
                          </button>
                          <button
                            type="button"
                            className="fc-next-button fc-button"
                            onClick={next}
                          >
                            <span className="fc-icon fc-icon-chevron-right"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AgendaDub
                    ref={calendarRef}
                    googleCalendarApiKey="AIzaSyDMYjtZlfF-Qx-9-b0aYkgEgnuZJN-Fsgg"
                    eventSources={events}
                    locale="pt-br"
                    views={{
                      timeGridWeek: {
                        dayHeaderFormat: {
                          weekday: 'long',
                          day: 'numeric',
                          omitCommas: true
                        },
                        dayHeaderContent: args => {
                          const text = args.text.replace('-feira', '')
                          return text.replace(' ', '\n')
                        }
                      },
                      listWeek: {
                        noEventsText: 'Não há eventos para mostrar',
                        listDaySideFormat: {
                          day: 'numeric',
                          month: 'short'
                        }
                      }
                    }}
                    firstDay={1}
                    headerToolbar={{
                      left: '', // will normally be on the left. if RTL, will be on the right
                      center: '',
                      right: '' // will normally be on the right. if RTL, will be on the left
                    }}
                    height="auto"
                    eventBorderColor="transparent"
                    slotMinTime="16:00"
                    slotMaxTime="24:00"
                    allDaySlot={false}
                    slotEventOverlap={true}
                    nowIndicator={false}
                    windowResize={responsiveView}
                    eventDidMount={(customStyle, getTitle)}
                    titleRangeSeparator={' à '}
                    dayHeaderFormat={{
                      month: 'short',
                      weekday: 'short',
                      day: 'numeric'
                    }}
                    titleFormat={{
                      year: 'numeric',
                      day: 'numeric',
                      month: 'short'
                    }}
                    eventClick={info => {
                      info.jsEvent.preventDefault()
                      if (info.event.title) {
                        const timeFormat = new Date(info.event.start)
                        const theTime = timeFormat.toLocaleTimeString('pt-BR')
                        alert(theTime + '-' + info.event.title)
                      }
                    }}
                    plugins={[
                      googleCalendarPlugin,
                      dayGridPlugin,
                      timeGridPlugin,
                      listPlugin
                    ]}
                    initialView={
                      window.innerWidth <= 992 ? 'listWeek' : 'timeGridWeek'
                    }
                  />
                </div>
              </main>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
