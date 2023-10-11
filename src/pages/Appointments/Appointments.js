import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
// import { format, addDays, areIntervalsOverlapping } from 'date-fns'
// import ptBR from 'date-fns/locale/pt-BR'
// import M from 'materialize-css'
// import i18n from '../../assets/js/materialcss_datepicker_i18n_ptBR.js'
// import * as Yup from 'yup'
// import { phoneMask } from '../../utils/mask'

// import { Form, Formik, Field } from 'formik'
// import api from 'axios'
// import Input from '../../components/Input'
// import Preloader from '../../components/Preloader'
import { SiWhatsapp } from 'react-icons/si'
import { VscCopy } from 'react-icons/vsc'
import M from 'materialize-css';
import './style.css'
import matchbox from '../../assets/img/match.png'
function Appointments(props) {
  var tooltip = useRef()
  useEffect(() => {
    //   const dateInput = document.querySelector('.datepicker')
    //   const options = {
    //     autoClose: true,
    //     format: 'dd/mm/yyyy',
    //     container: 'body',
    //     minDate: addDays(new Date(), 1),
    //     onSelect: date => {
    //       setDateSelected(date)
    //     },
    //     onClose: function focus() {
    //       dateInput.focus()
    //     },
    //     i18n: i18n
    //   }
    //   M.Datepicker.init(dateInput, options)
    M.Tooltip.init(tooltip)
  }, [])
  const [sala, setSala] = useState(props.sala)
  const salaNumber = sala.number ? `na ${sala.number}` : ''
  // const scheduleTimes = sala.calendar.times
  // const [dateSelected, setDateSelected] = useState('')
  // const [availableTimes, setAvailableTimes] = useState([])
  // const [fetchCalendarTimesStatus, setFetchCalendarTimesStatus] = useState('')
  // /* formik guarda valores por padrão / resetar valores ao gerar novos horários */
  // const form = useRef(null)
  // const resetHorarioCheckbox = () => {
  //   form.current.setFieldValue('horario', [])
  // }
  // /* implementa mascara no telefone */
  // const [phone, setPhone] = useState('')
  // const handlePhoneChange = (text) => {
  //   const maskedText = phoneMask(text)
  //   setPhone(maskedText)
  //   form.current.setFieldValue('phone', maskedText)
  // }
  // const customResetForm = () => {
  //   form.current.resetForm()
  //   setPhone('')
  //   setFetchCalendarTimesStatus('')
  //   // setFormStatus('')
  //   setAvailableTimes([])
  //   M.updateTextFields()
  // }
  function updateClipboard() {
    console.log('updateClipboard')
    navigator.clipboard.writeText('51 30227495').then(() => {
      M.Tooltip.getInstance(tooltip).open()
      setTimeout(() => {
        M.Tooltip.getInstance(tooltip).close()
      }, 2500)
      console.log('Copiado')
    }, () => {
      console.log('Não Copiado')
      /* clipboard write failed */
    });
  }
  useEffect(() => {
    setSala(props.sala)
    //customResetForm()
  }, [props.sala, sala])
  /* consulta googleCalendar por data, retorna horários ocupados e compara com disponíveis */
  // const [calendarSlots, setCalendarSlots] = useState([])

  // const fetchCalendarTimes = async () => {
  //   setAvailableTimes([])
  //   setFetchCalendarTimesStatus('Consultando horários...')
  //   const client_id = sala.calendar.client_id
  //   const timeStart = format(new Date(dateSelected), 'yyyy-MM-dd')
  //   const timeEnd = format(addDays(new Date(dateSelected), 1), 'yyyy-MM-dd')
  //   const dateSelectedFormated = format(
  //     new Date(dateSelected),
  //     "EEEE',' dd 'de' MMMM",
  //     { locale: ptBR }
  //   )
  //   const calendar_url = `https://www.googleapis.com/calendar/v3/calendars/${client_id}/events?key=AIzaSyDMYjtZlfF-Qx-9-b0aYkgEgnuZJN-Fsgg&timeMin=${timeStart}T00%3A00%3A00-03%3A00&timeMax=${timeEnd}T00%3A00%3A00-03%3A00&singleEvents=true&maxResults=20`
  //   await fetch(calendar_url)
  //     .then(response => response.json())
  //     .then(json => {
  //       const calendarSlotsResponse = json.items.map(item => {
  //         const startTime = new Date(item.start.dateTime)
  //         const endTime = new Date(item.end.dateTime)
  //         console.log('start:', startTime, 'end:', endTime)
  //         return { start: startTime, end: endTime }
  //       })
  //       setCalendarSlots(calendarSlotsResponse)
  //     }
  //     ).catch(error => {
  //       setFetchCalendarTimesStatus('Um erro ocorreu. Tente novamente.')
  //       setAvailableTimes([])
  //       console.log(error)
  //     })

  //   scheduleTimes.forEach((slot) => {
  //     const startArray = slot.start.split(':')
  //     const endArray = slot.end.split(':')
  //     const year = dateSelected.getFullYear()
  //     const month = dateSelected.getMonth()
  //     const day = dateSelected.getDay()

  //     const interval = { start: new Date(year, month, day, startArray[0], startArray[1]), end: new Date(year, month, day, endArray[0], endArray[1]) }
  //     console.log(interval)
  //     for (let i = 0; i < calendarSlots.length; i++) {
  //       const overlap = areIntervalsOverlapping(interval, calendarSlots[i])
  //       if (overlap) {
  //         availableTimes.push({ start: slot.start, end: slot.end, disabled: true })
  //         break
  //       }
  //       availableTimes.push({ start: slot.start, end: slot.end, disabled: false })
  //     }
  //   })
  //   if (availableTimes) {
  //     console.log(availableTimes)
  //     setFetchCalendarTimesStatus(`Horários de ${dateSelectedFormated}`)
  //   }
  // }
  // useEffect(() => {
  //   if (dateSelected) {
  //     form.current.setFieldValue('dia', format(new Date(dateSelected), 'dd/MM/yyyy'))
  //     fetchCalendarTimes()
  //     resetHorarioCheckbox()
  //   }
  // }, [dateSelected])

  // const initialValues = {
  //   name: '',
  //   banda: '',
  //   email: '',
  //   phone: '',
  //   dia: '',
  //   horario: [],
  //   observacoes: '',
  //   subject: ''
  // }

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(6, 'Informe seu nome com pelo menos 6 letras')
  //     .required('Informe seu nome completo'),
  //   email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  //   banda: Yup.string().required('Informe nome de artista ou banda'),
  //   phone: Yup.string()
  //     .min(15, 'O telefone deve ter DDD + 9 dígitos')
  //     .required('Informe um número para contato'),
  //   dia: Yup.lazy(() => {
  //     if (sala.page === 'gravacao') {
  //       return Yup.string().notRequired()
  //     }
  //     return Yup.string().required('Escolha uma data')
  //   }),
  //   horario: Yup.array(Yup.string()).when('dia', {
  //     is: (value) => !!value,
  //     then: Yup.array(Yup.string())
  //       .required()
  //       .min(1, 'Selecione pelo menos um horário')
  //   }),
  //   observacoes: Yup.lazy(() => {
  //     if (sala.page === 'gravacao') {
  //       return Yup.string().required('Digite detalhes sobre a sua gravação')
  //     } else {
  //       return Yup.string().notRequired()
  //     }
  //   }),
  //   subject: Yup.string()
  // })
  // const [formStatus, setFormStatus] = useState('')
  return (
    <section id="containerAppointment">
      <div className="container">
        <div className="flex-row row">
          <div className="col l6 s12 flex-center">
            <img className="matchbox img-fluid" width="554" height="554" src={matchbox} alt="" />
          </div>
          <div className="col l6 s12">
            <h3 className='d-block flex-center mt-5'>MARCAR HORÁRIO</h3>
            <div className="m-4">
              <p>Agende horário agora pelo WhatsApp ou ligue 51 3022 7495 (a partir das 16h).<br />Confira os horários na <NavLink className="link" to="/agenda">AGENDA</NavLink> para agilizar a marcação.</p>
              <div className="flex-row">
                <div>
                  <button className="btn-recordings" onClick={updateClipboard} ><VscCopy />COPIAR NÚMERO</button>
                  <a
                    className="copy"
                    ref={tt => { tooltip = tt }}
                    data-position="bottom"
                    data-tooltip="Copiado para sua<br/> área de transferência" ></a>
                </div>
                <a href="https://wa.me/555130227495"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-recordings hover"><SiWhatsapp />ABRIR WHATSAPP</button>
                </a>
              </div>
            </div>
            {/* <Formik
            innerRef={form}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setFormStatus('Enviando sua mensagem...')
              api.post('https://dubstudio.com.br/web/sendMail.php', values).then(response => {
                setSubmitting(false)
                setFormStatus('Sua mensagem foi enviada!')
                customResetForm()
                console.log(response.data)
              }, (error) => {
                console.log(error)
                setFormStatus('Ocorreu um erro. Sua mensagem não foi enviada.')
                setSubmitting(false)
              })
            }
            }>
            {({ errors, touched, handleChange, setFieldValue, isSubmitting, setFormStatus }) => (
              <Form>
                <Input type="hidden" name="subject" />
                <div className="row">
                  <div className="col s12 flex-row">
                    <h3>{sala.formTitle}</h3>
                    {sala.page !== 'gravacao' ? (
                      <Link to="/gravacao#gravar">
                        <button className="btn-recordings">QUERO GRAVAR</button>
                      </Link>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col l6 s12">
                    <Input name="name" id="name" type="text" label="Nome" />
                    {touched.name && errors.name ? (
                      <div className="errorMessage">{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="col l6 s12">
                    <Input name="banda" id="banda" type="text" label="Banda ou artista" />
                    {touched.banda && errors.banda ? (
                      <div className="errorMessage">{errors.banda}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col l6 s12">
                    <Input
                      name="email"
                      type="text"
                      id="email"
                      label="E-mail"
                    />
                    {touched.email && errors.email ? (
                      <div className="errorMessage">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="col l6 s12">
                    <Input
                      name="phone"
                      id="phone"
                      type="text"
                      label="Celular com DDD"
                      value={phone}
                      maxLength={15}
                      onChange={(e) => { handlePhoneChange(e.target.value) }}
                    />
                    {touched.phone && errors.phone ? (
                      <div className="errorMessage">{errors.phone}</div>
                    ) : null}
                  </div>
                </div>

                {sala.page !== 'gravacao'
                  ? <div className="row">
                    <div className="col l12 s12">
                      <Input
                        type="text"
                        name="dia"
                        id="dia"
                        label="Qual o dia?"
                        className="datepicker"
                        onChange={handleChange('dia')}
                        onBlur={handleChange}
                        helperText="Escolha uma data para ver os horários disponíveis"
                      // value={
                      //   dateSelected
                      //     ? format(new Date(dateSelected), 'dd/MM/yyyy')
                      //     : ''
                      // }
                      />
                      {touched.dia && errors.dia ? (
                        <div className="errorMessage">{errors.dia}</div>
                      ) : null}
                    </div>
                  </div>
                  : null
                }
                <div className="row">
                  {fetchCalendarTimesStatus && (
                    <div className="col s12">
                      <p>{fetchCalendarTimesStatus}</p>
                    </div>
                  )}
                  <div role="group" aria-labelledby="checkbox-group">
                    {/* {availableTimes.map((item, index) => {
                      return (
                        <div data-key={index} key={index} className="col l4 s12">
                          <label htmlFor={`radio${index}`}>
                            <Field
                              type="checkbox"
                              id={`radio${index}`}
                              name="horario"
                              value={`${item.start}h - ${item.end}h`}
                              onChange={handleChange}
                              className="filled-in with-gap"
                              disabled={item.disabled}
                            />
                            <span>
                              <i className="material-icons">block</i>
                              {`${item.start}h - ${item.end}h`}
                            </span>
                          </label>
                        </div>
                      )
                    })}
                  </div>
                  <div className="col s12">
                    {touched.horario && errors.horario ? (
                      <div className="errorMessage">{errors.horario}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col l12 s12">
                    <Input
                      as="textarea"
                      label={sala.page === 'gravacao' ? 'Detalhes da gravação' : 'Observações'}
                      name="observacoes"
                      id="observacoes"
                      helperText={sala.page === 'gravacao' ? 'Descreva aqui o estilo musical, número de instrumentistas e o dia da semana de sua preferência que entraremos em contato para agendar um horário.'
                        : null}
                      className="materialize-textarea"
                    ></Input>
                    {touched.observacoes && errors.observacoes ? (
                      <div className="errorMessage">{errors.observacoes}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 ">
                     {isSubmitting && <p>Enviando sua solicitação...</p>}
                     {Object.keys(errors).length > 0 ? ()=> setFormStatus('Erro') : null }

                    {formStatus && <p> {formStatus} </p>}
                    <div className="input-field">
                      {isSubmitting && <Preloader />}
                      <button
                        type="submit"
                        className="btn waves-effect waves-light"
                        onClick={() => setFieldValue('subject', `QUERO ${sala.formTitle} ${salaNumber}`)}
                        disabled={isSubmitting}
                      >
                        MARCAR HORÁRIO
                      </button>
                      <span className="helper-text center">A marcação do horário está sujeita a confirmação. </span>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik> */}
          </div>
        </div>
      </div>
    </section >
  )
}
export default Appointments
