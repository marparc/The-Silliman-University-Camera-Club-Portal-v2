import { Button } from "../atoms/button";
import { Label } from "../atoms/label";

export function RecruitSection() {
  return (
    <section className="relative bg-linear-to-b from-black to-neutral-950 py-10 px-4">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none opacity-5 z-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center bg-linear-to-r from-neutral-900/50 to-neutral-800/50 rounded-2xl p-8 border border-neutral-700/50 flex flex-col gap-3">
          <Label className="text-2xl md:text-3xl font-bold text-white block">
            Ready to Capture Your Journey?
          </Label>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm">
            Join SUCC and become part of our barangay. No experience required –
            just bring your passion!
          </p>
          <div className="flex justify-center mt-1">
            <Button className="px-12 py-5 bg-red-800 hover:bg-red-700 text-white min-w-50">
              Join the Club
            </Button>
          </div>
          <p className="text-sm text-neutral-500">
            Membership is open to all SHS or college students of Silliman
            University.
          </p>
        </div>
      </div>
    </section>
  );
}
