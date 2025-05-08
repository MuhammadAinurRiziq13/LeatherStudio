import { features } from "@/constants/features";

export default function Feature() {
  return (
    <section className="bg-white py-10 border-y border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZjVmNWY1Ij48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJoMmMxIDAgMi0xIDItMnYtMmMwLTEtMS0yLTItMmgtMmMtMSAwLTIgMS0yIDJ2Mnom+PC9wYXRoPjwvZz48L3N2Zz4=')] opacity-40"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 hover:shadow-md relative bg-white/70 backdrop-blur-sm group">
              <div className="p-3 bg-yellow-50 rounded-lg mb-3 group-hover:bg-yellow-100 transition-colors duration-300 relative">
                <div className="absolute inset-0 bg-yellow-200 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-30"></div>
                <div className="relative">{feature.icon}</div>
              </div>
              <div className="font-semibold mb-1">{feature.title}</div>
              <div className="text-xs text-gray-500">{feature.desc}</div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
