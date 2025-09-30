import * as React from 'react';
import PageHeader from '../common/PageHeader';
import { PageHeaderText } from "../common/PageHeaderText";

export default function Contacts () {
  return (
    <div>
      <PageHeader img={'bg/BE0A5741-opt.jpg'} height='md:h-90v'>
        <PageHeaderText header="Let's Chat!">
          <>
            <p className="md:text-4xl text-zinc-200 italic pb-10">Mail me or schedule a call</p>
            <p>
              <a href="mailto:o@zelen.uk" target="_blank">
                <span className="sr-only">Mail me</span>
                <svg viewBox="0 0 24 24" className="md:inline-block hover:stroke-zinc-50 stroke-yellow-500 md:h-12 md:w-12 md:mr-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="https://calendly.com/ozelen/30min" target="_blank">
                <span className="sr-only">Request a call</span>
                <svg viewBox="0 0 24 24" className="inline-block hover:stroke-zinc-50 stroke-yellow-500 md:h-12 md:w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9H21M12 18V12M15 15.001L9 15M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </p>
          </>
        </PageHeaderText>
      </PageHeader>
    </div>
  );
}