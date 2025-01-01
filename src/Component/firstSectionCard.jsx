import React from "react";

export default function FirstSectionCard() {
  return (
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-center items-center">
        <div class="bg-gray-200 p-3 rounded-full">
          <svg
            class="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 4v8m-6 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
      </div>
      <h2 class="text-xl font-semibold ml-4 text-center">Share team inboxes</h2>
      <p class="text-center">
        Whether you have a team of 2 or 200, our shared team inboxes keep
        everyone on the same page and in the loop.
      </p>
    </div>
  );
}
