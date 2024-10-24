import '../components/css/App.css'
import { DefaultNavbar } from '../components/misc'
import { TerrariumGraph } from '@/components/graphs';

export default function Terrarium() {
  return (
    <>
      <title>Terrarium Article</title>

      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>

      <DefaultNavbar />
      <div className="flex flex-col justify-center items-center text-white text-start mt-[3.25rem]">
        <div className="p-4 w-[100%]">
          <h1>Rendering Units</h1>

          <hr className="m-8 border-2 rounded-full mx-auto w-full" />

          <p className="indent-12">
            By default, Roblox Studio uses single threading, meaning that the
            code has to wait for previous code to execute before it can move on.
            This means that it was paramount that the unit rendering system was
            optimized, as it was one of the most resource intensive components
            of the game. A big mistake I made early in the development progress
            was relying on just the server to render the units. Because the
            instance is rendered on the server side, the server is constantly
            calculating the physics in the background, which creates a tiny
            delay in the thread. All of these delays add up, significantly
            affecting all scripts and slowing the entire game down. My first
            attempt at optimizing unit movement was to have the physics engine
            not put the units into consideration when calculating the game physics,
            however this only marginally improved performance.
          </p>
          <div className="flex flex-row-4 justify-center items-center my-8 space-x-4">
            <div className="flex flex-col">
              <img src="/Example1.png" className="flex rounded-lg" />
              <p className="text-center">Client (User) Side</p>
            </div>
            <div className="flex flex-col">
              <img src="/Example1.png" className="flex rounded-lg" />
              <p className="text-center">Server Side</p>
            </div>
          </div>
        </div>

        <p className="indent-12">
          My final optimization I made was that instead of having the entire unit be rendered on
          the server, only the hitbox would be rendered, whilst the rest of the
          unit is rendered locally on the device. This is done by first using a
          remote event, a built-in feature within Roblox Studio
          that allows one way communication between server-sided and
          client-sided scripts. With the units now being primarily rendered
          on the client-side, this takes a  large amount of work off of the server, which can
          now focus more on other mechanics without severely lagging the game. However, the
          main disadvantage of offloading this work to the user's device is that now the
          performance is more dependent on the device, which can negatively affect the frames
          per second (FPS) on older or lower end devices.
        </p>

        <div className="flex flex-row-4 justify-center items-center my-8 space-x-4">
          <div className="flex flex-col">
            <img src="/Example2b.png" className="flex rounded-lg" />
            <p className="text-center">Client (User) Side</p>
          </div>
          <div className="flex flex-col">
            <img src="/Example2a.png" className="flex rounded-lg" />
            <p className="text-center">Server Side</p>
          </div>
        </div>

        <div className='flex flex-row justify-center items-center'>
          <TerrariumGraph />
        </div>
      </div>
    </>
  );
}