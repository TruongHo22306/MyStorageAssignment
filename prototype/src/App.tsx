import { useEffect, useState } from 'react';
import { ArrowUpRight, Boxes, CircleAlert, Clock3, FileText, Info, MapPin, RotateCcw, Snowflake, Warehouse } from 'lucide-react';
import { capturedQuote, sources } from './quote-fixture';
import { defaultInputs, displayVolume, evaluateInputs } from './calculations';
import type { NumericField } from './calculations';
import { copy } from './copy';
import type { Language } from './copy';

export default function App() {
  const [inputs, setInputs] = useState({ ...defaultInputs });
  const [language, setLanguage] = useState<Language>('vi');
  const text = copy[language];
  const { errors, result } = evaluateInputs(inputs);
  const money = (value: number) => `${value.toLocaleString(language === 'vi' ? 'vi-VN' : 'en-US')} VND`;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${text.title} | MyStorage`;
  }, [language, text.title]);

  function numericInput(field: NumericField) {
    return (
      <div className="field" key={field}>
        <label htmlFor={field}>{text.fields[field]}</label>
        <input id={field} type="number" min={field === 'boxes' || field === 'months' ? 1 : undefined}
          step={field === 'boxes' || field === 'months' ? 1 : 'any'} value={inputs[field]}
          aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined}
          onChange={(event) => setInputs({ ...inputs, [field]: event.target.value })} />
        {errors[field] && <span className="field-error" id={`${field}-error`}>{text.errors[errors[field]]}</span>}
      </div>
    );
  }

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand"><Warehouse aria-hidden="true" /><strong>MyStorage</strong><span>{text.local}</span></div>
          <div className="language" role="group" aria-label={text.language}>
            <button type="button" lang="vi" aria-label="Tiếng Việt" aria-pressed={language === 'vi'} onClick={() => setLanguage('vi')}>VI</button>
            <button type="button" lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
          </div>
        </div>
      </header>

      <main>
        <div className="page-heading">
          <p className="eyebrow"><FileText size={16} aria-hidden="true" />{text.captured}</p>
          <h1>{text.title}</h1>
          <p className="subtitle">{text.subtitle}</p>
          <p className="location"><MapPin size={16} aria-hidden="true" />{capturedQuote.facility}</p>
        </div>

        <div className="workspace">
          <aside className="needs" aria-labelledby="needs-heading">
            <div className="section-heading">
              <h2 id="needs-heading">{text.needs}</h2>
              <button className="icon-button" type="button" aria-label={text.reset} title={text.reset}
                onClick={() => setInputs({ ...defaultInputs })}><RotateCcw size={17} aria-hidden="true" /></button>
            </div>
            <form noValidate onSubmit={(event) => event.preventDefault()}>
              {numericInput('boxes')}
              <fieldset>
                <legend>{text.dimensions}</legend>
                <div className="dimensions">{(['length', 'width', 'height'] as const).map(numericInput)}</div>
              </fieldset>
              {numericInput('months')}
              <div className="field">
                <label htmlFor="access">{text.fields.access}</label>
                <input id="access" type="time" value={inputs.access} aria-invalid={Boolean(errors.access)}
                  aria-describedby={errors.access ? 'access-error' : undefined}
                  onChange={(event) => setInputs({ ...inputs, access: event.target.value })} />
                {errors.access && <span className="field-error" id="access-error">{text.errors[errors.access]}</span>}
              </div>
            </form>
            <section className="volume" aria-live="polite" aria-labelledby="volume-heading">
              <h3 id="volume-heading"><Boxes size={18} aria-hidden="true" />{text.volume}</h3>
              {result ? <>
                <p className="volume-number"><output data-testid="volume">{displayVolume(result.volume)}</output> <span>CBM</span></p>
                <p className="muted">{text.raw}: <span data-testid="raw-volume">{Number(result.volume.toPrecision(12))}</span> CBM</p>
              </> : <p className="field-error">{errors.calculation ? text.errors[errors.calculation] : text.invalid}</p>}
              <p className="small">{text.fit}</p>
            </section>
          </aside>

          <div className="comparison-area">
            {result ? <section aria-labelledby="comparison-heading" data-testid="recommendation">
              <div className="comparison-heading"><h2 id="comparison-heading">{text.options}</h2><span>{text.vat}</span></div>
              {!result.capturedBoxes && <p className="notice" role="status"><CircleAlert size={18} aria-hidden="true" />{text.changed}</p>}
              <div className="quotes">
                {capturedQuote.options.map((option) => {
                  const optionExceeds = option.id === 'cool' ? result.capacity.coolExceeds : result.capacity.standardExceeds;
                  return (
                  <article key={option.id} className={`quote ${option.id}`} aria-labelledby={`${option.id}-heading`}>
                    <div className={`quote-ribbon${optionExceeds ? ' over-capacity' : ''}`}>{optionExceeds ? text.exceedsCapacity : option.conditional ? text.lower : text.standard}</div>
                    <div className="quote-body">
                      <div className="product-type">{option.conditional ? <Snowflake size={21} aria-hidden="true" /> : <Warehouse size={21} aria-hidden="true" />}{text.services[option.id]}</div>
                      <h3 id={`${option.id}-heading`}>{option.name}</h3>
                      {optionExceeds && <p className="capacity-warning">{text.exceeds}</p>}
                      <p className="price">{money(option.monthlyPrice)}<span>{text.month}</span></p>
                      <div className="total"><span>{text.total} {result.months} {text.months}</span><strong>{money(option.monthlyPrice * result.months)}</strong></div>
                      <dl>
                        <dt><Clock3 size={15} aria-hidden="true" />{text.access}</dt>
                        <dd>{text.accessValue}<small>{text.accessMatch} {inputs.access}, {text.according}.</small></dd>
                        <dt>{text.temperature}</dt><dd>{text.temperatures[option.id]}</dd>
                        <dt>{text.conditions}</dt><dd>{text.eligibility[option.id]}</dd>
                      </dl>
                      <div className="quote-source"><p>{text.source}</p><p><Info size={14} aria-hidden="true" />{text.availability}</p></div>
                    </div>
                  </article>
                  );
                })}
              </div>

              {result.capacity.overall === 'both-fit' ? <>
              <div className="savings" aria-live="polite">
                <div><h3>{text.difference}</h3><p>{text.monthlyDifference}: <strong>{money(result.prices.monthlyDifference)}</strong></p></div>
                <div className="savings-amount"><strong>{money(result.prices.totalDifference)}</strong><span>{result.months} {text.months} · {text.beforeVat}</span></div>
              </div>
              <p className="calculation-note">{text.estimate}</p>

              <section className="explanation" aria-labelledby="explanation-heading">
                <h2 id="explanation-heading">{text.explanation}</h2>
                <p>{text.coolReason}</p><p>{text.standardReason}</p>
              </section>
              </> : <>
              <div className="capacity-notice" aria-live="polite">
                <p><CircleAlert size={18} aria-hidden="true" />{result.capacity.overall === 'both-exceed' ? text.bothExceedsSummary : text.oneExceedsSummary}</p>
              </div>
              <p className="calculation-note">{text.estimate}</p>

              <section className="explanation" aria-labelledby="explanation-heading">
                <h2 id="explanation-heading">{result.capacity.overall === 'both-exceed' ? text.bothExceedsHeading : text.oneExceedsHeading}</h2>
                <p>{result.capacity.overall === 'both-exceed' ? text.bothExceedsExplanation : text.oneExceedsExplanation}</p>
              </section>
              </>}
            </section> : <section className="invalid-state" role="status"><CircleAlert size={26} aria-hidden="true" /><h2>{text.invalidTitle}</h2><p>{text.invalid}</p></section>}

            <section className="verification" aria-labelledby="verify-heading">
              <h2 id="verify-heading">{text.verifyTitle}</h2>
              <p>{text.verifyNotice}</p>
              <a className="verify-button" href={sources.booking} target="_blank" rel="noreferrer">{text.verify}<ArrowUpRight size={18} aria-hidden="true" /></a>
              <p className="small">{text.bookingNotice}</p><p className="small">{text.sourceTime}</p>
            </section>
          </div>
        </div>

        <footer className="sources">
          <figure><img src="/self-storage.webp" width="96" height="144" alt={text.photoAlt} /><figcaption>{text.photoCaption}</figcaption></figure>
          <div><h2>{text.sourcesTitle}</h2><nav aria-label={text.sourcesTitle}>
            {(['selfStorage', 'sizeGuide', 'wineStorage'] as const).map((key) => <a key={key} href={sources[key]} target="_blank" rel="noreferrer">{text.sourceNames[key]}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
          </nav><p>{text.sourceBoundary}</p></div>
        </footer>
      </main>
    </>
  );
}
